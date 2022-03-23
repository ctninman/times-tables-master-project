Rails.application.routes.draw do

  get '/hello', to: 'application#hello'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
