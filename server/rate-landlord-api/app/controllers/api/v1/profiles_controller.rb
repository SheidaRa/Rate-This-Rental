class Api::V1::ProfilesController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: [ :create, :show, :update, :destroy ]

  def index
    
    render json: current_devise_api_user.profile, status: :ok
  end

  def show
    devise_api_token = current_devise_api_token
    render json: devise_api_token.resource_owner.profile.find(params[:id]), status: :ok
    # @profile = Profile.includes(:name, :user).find(params[:id])
    # render json: @profile, include: [:name, :user]
  end

  def create
    @profile = Profile.new(profile_params)
    devise_api_token = current_devise_api_token
    @profile.user = devise_api_token.resource_owner

    if @profile.save
      render json: @profile, status: :created, location: api_v1_profile_url(@profile)
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  def update
    if @profile.update(profile_params)
      render json: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @profile.destroy!
  end

  private
    def profile_params
      params.require(:profile).permit(:name)
    end
end
