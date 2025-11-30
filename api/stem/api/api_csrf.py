from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie

from api import api


@api.get('/csrf/', tags=['Stem'])
@ensure_csrf_cookie
def csrf(request):
    return JsonResponse('OK', safe=False)
