from django.conf import settings
from django.http import JsonResponse

from ninja import NinjaAPI


api = NinjaAPI(
    title='Webentlib',
    docs_url='docs/',
    openapi_url=settings.DEBUG and '/openapi.json' or '',  # https://github.com/vitalik/django-ninja/issues/225#issuecomment-917896249
)


# Exceptions

class BadRequest(Exception):
    message = 'BAD REQUEST'


class Forbidden(Exception):
    message = 'FORBIDDEN'


# Exception handlers

def _get_message(exception):
    message = exception.message
    if len(exception.args):
        message = exception.args[0]
    return message


@api.exception_handler(BadRequest)
def bad_request(request, exception):
    return JsonResponse(_get_message(exception), status=400, safe=False)


@api.exception_handler(Forbidden)
def forbidden(request, exception):
    return JsonResponse(_get_message(exception), status=403, safe=False)
