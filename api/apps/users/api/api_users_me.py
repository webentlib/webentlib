from api import api
from ninja import ModelSchema
from apps.users.models import User


class UserMeSchema(ModelSchema):
    is_anonymous: bool = True
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'middle_name']


@api.get('/me/', response=UserMeSchema, tags=['Users'])
def me(request):
    user = User.objects.filter(
        id=request.user.id
    ).only(*UserMeSchema.Meta.fields).first()

    if not user:
        user = request.user

    return user
