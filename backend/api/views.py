from django.shortcuts import render

# Create your views here.
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
        if user:
            return Response({"Auth Status": "Successful"})
        else:
            return Response({"Auth Status": "Failed"})
    else:
        return Response({'Test', 'Test'})