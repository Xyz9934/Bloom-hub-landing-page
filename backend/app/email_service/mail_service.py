from ..extensions import mail


def send_email(message):
    return mail.send(message)
