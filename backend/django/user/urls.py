from django.urls import path
from .views import FeedbackView, RegisterVoterView,voter_list,voter_detail,RegisterCandidateView

urlpatterns = [
    path('api/feedback/', FeedbackView.as_view(), name='feedback'),
    path('api/voting/register/', RegisterVoterView.as_view(), name='register_voter'),
    path('api/voting/voters/', voter_list, name='voter_list'),
    path('api/voting/voters/<int:id>/', voter_detail, name='voter-detail'),
    path('api/register/candidate/', RegisterCandidateView.as_view(), name='register_candidate'),
    
]
