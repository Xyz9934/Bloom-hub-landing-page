import os


class BaseConfig:
    SECRET_KEY = os.getenv("SECRET_KEY", "change-me")
    DEBUG = os.getenv("FLASK_DEBUG", "0") == "1"
    TESTING = False
    MAIL_SERVER = os.getenv("MAIL_SERVER", "")
    MAIL_PORT = int(os.getenv("MAIL_PORT", "587"))
    MAIL_USE_TLS = os.getenv("MAIL_USE_TLS", "true").lower() == "true"
    MAIL_USE_SSL = os.getenv("MAIL_USE_SSL", "false").lower() == "true"
    MAIL_USERNAME = os.getenv("MAIL_USERNAME", "")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD", "")
    MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER", "")
    DEVELOPER_EMAIL = os.getenv("DEVELOPER_EMAIL", "")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "")
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    DEBUG = False


def get_config():
    env = os.getenv("APP_ENV", "development").lower()
    if env == "production":
        return ProductionConfig
    return DevelopmentConfig
