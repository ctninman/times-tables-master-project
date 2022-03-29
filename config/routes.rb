Rails.application.routes.draw do
  resources :rules
  resources :masteries
  resources :problems
  resources :students
  resources :classrooms
  resources :teachers

  get '/hello', to: 'application#hello'

  get '/me', to: 'students#show'
  get '/me-teacher', to:'teachers#show'
  post '/signup-student', to: 'students#create'
  post '/signup-teacher', to: 'teachers#create'

  post '/login', to: 'sessions#create'
  post '/login-teacher', to: 'sessions#create_teacher'
  delete '/logout', to: 'sessions#destroy'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
