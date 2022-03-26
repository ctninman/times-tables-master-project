Rails.application.routes.draw do
  resources :rules
  resources :masteries
  resources :problems
  resources :students
  resources :classrooms
  resources :teachers

  get '/hello', to: 'application#hello'

  get '/me', to: 'students#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
