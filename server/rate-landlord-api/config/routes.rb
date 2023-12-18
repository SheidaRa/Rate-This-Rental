Rails.application.routes.draw do
  resources :profiles
  get 'pages/home'
  get 'pages/restricted'
  namespace :api do
    namespace :v1 do
      resources :addresses
      resources :landlords
      
      resources :rentals, param: :place_id do
        member do
          get 'similar', to: 'rentals#similar'
          put 'update_address', to: 'rentals#update_address'
          get 'by_id', to: 'rentals#by_id'
          get 'by_landlord', to: 'rentals#by_landlord'
        end
      end
      resources :reviews do
        collection do
          get 'by_user/:user_id', to: 'reviews#by_user'
        end
      end
      resources :rentals, param: :place_id do
        resources :reviews
        member do
          put 'become_landlord', to: 'rentals#become_landlord'
        end
      end
      # get '/rentals/:place_id', to: 'rentals#show'
      resources :profiles
        # resources :reviews
    # end
    end
  end

  devise_for :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
