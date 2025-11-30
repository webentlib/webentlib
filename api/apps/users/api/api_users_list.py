from api import api
from ninja import ModelSchema

from apps.users.models import User


class UserListSchema(ModelSchema):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'middle_name']


@api.get('/users/', response=list[UserListSchema], tags=['Users'])
def users_list(request):
    users = User.objects.all().only(
        *UserListSchema.Meta.fields
    )
    return users
