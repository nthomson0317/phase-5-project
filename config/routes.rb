Rails.application.routes.draw do
  resources :compositions
  resources :composers
  resources :periods
  
   # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  # get "/compositions/:id", to: "compositions#show"
end
