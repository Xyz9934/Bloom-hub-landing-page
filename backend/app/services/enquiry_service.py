from datetime import datetime, timezone

from ..email_service.enquiry_mailer import send_enquiry_email
from ..utilities.validators import is_valid_phone_number


class EnquiryValidationError(ValueError):
    pass


def validate_enquiry_payload(payload: dict) -> dict:
    full_name = str(payload.get("fullName", "")).strip()
    phone_number = str(payload.get("phoneNumber", "")).strip()
    bouquet_name = str(payload.get("bouquetName", "")).strip()
    message = str(payload.get("message", "")).strip()

    if not full_name:
        raise EnquiryValidationError("Full name is required.")
    if not phone_number:
        raise EnquiryValidationError("Phone number is required.")
    if not is_valid_phone_number(phone_number):
        raise EnquiryValidationError("Phone number is invalid.")
    if not bouquet_name:
        raise EnquiryValidationError("Bouquet selection is required.")

    return {
        "full_name": full_name,
        "phone_number": phone_number,
        "bouquet_name": bouquet_name,
        "message": message,
        "submitted_at": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
    }


def process_enquiry(payload: dict) -> None:
    normalized_payload = validate_enquiry_payload(payload)
    send_enquiry_email(normalized_payload)
