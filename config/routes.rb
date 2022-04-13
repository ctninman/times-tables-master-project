Rails.application.routes.draw do
  resources :rules, only: :index
  resources :masteries, only: :update
  resources :problems, only: :index
  resources :students, except: [:index, :create]
  resources :classrooms, only: [:create, :destroy, :show]
  resources :teachers, only: [:destroy, :show]

  
  # Login routes
  get '/me', to: 'students#show'
  get '/me-teacher', to:'teachers#show'

  # Signup/create routes
  post '/signup-student', to: 'students#create'
  post '/signup-teacher', to: 'teachers#create'
  post '/students/in-class', to: 'students#create_by_teacher'

  # Session routes
  post '/login', to: 'sessions#create'
  post '/login-teacher', to: 'sessions#create_teacher'
  delete '/logout', to: 'sessions#destroy'

  # Custom routes
  get '/students/:id/most-difficult', to: 'students#most_difficult'

  get '/students/filter', to:'students#filter'
  
  # Default route (if not in rails routes, send to client)
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
