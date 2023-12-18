class Api::V1::LandlordsController < ApplicationController
    skip_before_action :verify_authenticity_token, raise: false
    before_action :authenticate_devise_api_token!, only: [:create, :show]
  
    def index
      render json: Landlord.all, status: :ok
    end
  
    def show
      render json: Landlord.find(params[:id]), status: :ok
    end
  
    def create
      @landlord = Landlord.new(landlord_params)
  
      if @landlord.save
        render json: @landlord, status: :created, location: api_v1_landlord_url(@landlord)
      else
        render json: @landlord.errors, status: :unprocessable_entity
      end
    end

    def destroy
        @landlord = Landlord.find(params[:id])
        @landlord.destroy
        head :no_content
      end
  
    private
  
    def landlord_params
      params.require(:landlord).permit(:id, :name)
    end
  end
  