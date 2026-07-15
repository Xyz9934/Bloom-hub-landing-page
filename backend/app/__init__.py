from dotenv import load_dotenv
from flask import Flask

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

    app.register_blueprint(health_bp, url_prefix="/api")
    app.register_blueprint(enquiry_bp, url_prefix="/api")

    return app
