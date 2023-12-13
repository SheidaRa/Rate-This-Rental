class Apt::V1::ProfilesController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, :set_profile, only: %i[ show update destroy ]

  def show
    @profile = Profile.includes(:first_name, :last_name).find(params[:id])
    render json: @profile, include: [:first_name, :last_name]
  end

  def create
    @profile = Profile.new(profile_params)
    @profile.user = current_devise_api_user

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
    def set_profile
      @profile = Profile.find(params[:id])
    end

    def profile_params
      params.require(:profile).permit(:first_name, :last_name)
    end
end
