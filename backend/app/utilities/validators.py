import re


PHONE_PATTERN = re.compile(r"^[0-9+\-\s()]{7,20}$")


def is_valid_phone_number(value: str) -> bool:
    return bool(PHONE_PATTERN.fullmatch(value.strip()))
