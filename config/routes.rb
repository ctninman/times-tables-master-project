Rails.application.routes.draw do
  resources :masteries
  resources :problems
  resources :students
  resources :classrooms
  resources :teachers

  get '/hello', to: 'application#hello'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
