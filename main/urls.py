from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('projects/', views.projects, name='projects'),
    path('team/', views.team, name='team'),
    path('contact/', views.contact, name='contact'),
    path('blog/', views.blog, name='blog'),
    path('careers/', views.careers, name='careers'),
]