class Api::V1::AddressesController < ApplicationController
  def index
    if params[:search].present?
      @addresses = Address.near(params[:search], 50, :order => :distance)
    else
      @addresses = Address.all
    end
  end
end
