from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

from .config import get_config
from .extensions import mail
from .routes.enquiry import enquiry_bp
from .routes.health import health_bp
from .utilities.logging import configure_logging


def create_app() -> Flask:
    load_dotenv()
    configure_logging()
    app = Flask(__name__)
    app.config.from_object(get_config())
    mail.init_app(app)
    cors_origins = app.config.get("CORS_ORIGINS") or []
    CORS(app, resources={r"/api/*": {"origins": cors_origins or "*"}}, supports_credentials=True)

    app.register_blueprint(health_bp, url_prefix="/api")
    app.register_blueprint(enquiry_bp, url_prefix="/api")

    register_error_handlers(app)

    return app


def register_error_handlers(app: Flask) -> None:
    @app.errorhandler(404)
    def not_found(_error):
        return {"error": "Not found"}, 404

    @app.errorhandler(500)
    def internal_error(_error):
        return {"error": "Internal server error"}, 500
