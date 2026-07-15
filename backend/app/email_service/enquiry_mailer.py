from flask import current_app
from flask_mail import Message

from ..extensions import mail


def send_enquiry_email(payload: dict) -> None:
    recipient = current_app.config.get("DEVELOPER_EMAIL")
    sender = current_app.config.get("MAIL_DEFAULT_SENDER") or current_app.config.get("MAIL_USERNAME")

    if not recipient:
        raise ValueError("DEVELOPER_EMAIL is not configured.")

    message = Message(
        subject="New Shifa Blooms enquiry",
        recipients=[recipient],
        sender=sender,
        body=(
            f"Customer Name: {payload['full_name']}\n"
            f"Phone Number: {payload['phone_number']}\n"
            f"Bouquet Name: {payload['bouquet_name']}\n"
            f"Customer Message: {payload['message'] or 'N/A'}\n"
            f"Date & Time: {payload['submitted_at']}"
        ),
    )
    mail.send(message)
