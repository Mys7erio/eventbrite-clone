# from django.shortcuts import render, redirect

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate


@api_view(['POST', 'GET'])
def login(request, format='json'):
    if request.method == "POST":
        username = request.data.get('username')
        password = request.data.get('password')
        print(username, password, request.data.get('username'), request.data.get('password'))
        user = authenticate(request, username=username, password=password)
        if not user:
            return Response(data={"message:" "Authentication failed"}, status=status.HTTP_401_UNAUTHORIZED)

        # Authentication was successful
        return Response(data={"message": "Authentication successful"}, status=status.HTTP_302_FOUND)
    else:
        return Response({'Test', 'Test'})