from django.contrib.auth import (
    authenticate as django_authenticate,
    login as django_login,
    logout as django_logout
)

from ninja import ModelSchema

from api import api, BadRequest

from apps.users.models import User


class UserAuthSchema(ModelSchema):
    class Meta:
        model = User
        fields = ['email', 'password']


@api.post('/login/', tags=['Users'])
def login(request, payload: UserAuthSchema):
    user = django_authenticate(request, email=payload.email, password=payload.password)
    if user is None:
        raise BadRequest()
    django_login(request, user)
    return 'OK'



@api.post('/logout/', tags=['Users'])
def logout(request):
    django_logout(request)
    return 'OK'
