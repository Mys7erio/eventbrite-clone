# from django.shortcuts import render, redirect

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.serializers import json


@api_view(['POST', 'GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def login(request, format='json'):
    if request.method == 'GET':
        # is_auth = request.user.is_authenticated
        allusers = json.Serializer().serialize(User.objects.all())
        print(allusers)
        return Response(data={"authenticated": allusers})
    
    if request.method == "POST":
        username = request.data.get('username')
        password = request.data.get('password')
        # Check if user exists in the database
        user = authenticate(request, username=username, password=password)

        if not user:
            return Response(data={"message:" "Authentication failed"}, status=status.HTTP_401_UNAUTHORIZED)

        # Authentication was successful
        token = Token.objects.create(user=user)
        print(request.user.is_authenticated)
        return Response(data={"message": "Authentication successful", "Token": token.key}, status=status.HTTP_302_FOUND)
    


@api_view(['POST'])
def verify(request):
    user_token = request.data.get("Token")
    print(f"USERTOKEn {user_token=}")
    try:
        token = Token.objects.get(key=user_token)
        print(token.key)
        return Response(data={"token_valid": True})
    except Token.DoesNotExist:
        return Response(data={"token_valid": False})
