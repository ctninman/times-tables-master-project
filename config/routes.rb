Rails.application.routes.draw do

  post '/hello', to: 'application#hello_world'

end
