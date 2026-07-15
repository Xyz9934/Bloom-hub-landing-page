from flask import Blueprint, jsonify, request

from ..services.enquiry_service import EnquiryValidationError, process_enquiry

enquiry_bp = Blueprint("enquiry", __name__)


@enquiry_bp.post("/enquiry")
def create_enquiry():
    if not request.is_json:
        return jsonify(error="Request body must be JSON."), 400

    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return jsonify(error="Invalid JSON payload."), 400

    try:
        process_enquiry(payload)
    except EnquiryValidationError as error:
        return jsonify(error=str(error)), 400
    except ValueError as error:
        return jsonify(error=str(error)), 500
    except Exception:
        return jsonify(error="An unexpected error occurred."), 500

    return jsonify(message="Enquiry submitted successfully."), 201
