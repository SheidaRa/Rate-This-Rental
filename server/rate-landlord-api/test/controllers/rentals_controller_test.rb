require "test_helper"

class RentalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @rental = rentals(:one)
  end

  test "should get index" do
    get rentals_url, as: :json
    assert_response :success
  end

  test "should create rental" do
    assert_difference("Rental.count") do
      post rentals_url, params: { rental: { address_id: @rental.address_id, landlord_id: @rental.landlord_id } }, as: :json
    end

    assert_response :created
  end

  test "should show rental" do
    get rental_url(@rental), as: :json
    assert_response :success
  end

  test "should update rental" do
    patch rental_url(@rental), params: { rental: { address_id: @rental.address_id, landlord_id: @rental.landlord_id } }, as: :json
    assert_response :success
  end

  test "should destroy rental" do
    assert_difference("Rental.count", -1) do
      delete rental_url(@rental), as: :json
    end

    assert_response :no_content
  end
end
