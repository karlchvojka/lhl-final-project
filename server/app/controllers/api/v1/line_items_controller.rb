class Api::V1::LineItemsController < ApplicationController
  def index
    render json: Budget.find(params[:budget_id]).line_items.order(created_at: :desc)
 end

  def create
    
    if params[:name]=="" || !params[:amount]
      render json: {status: "error", code: 4000, message: "Can't create a new line item with blank name or amount."}    
    elsif params[:amount].to_i < 1
      render json: {status: "error", code: 4000, message: "Can't create a new line item with amount of $0 or less."}
    else
      puts params[:name], params[:amount]
      line_item = LineItem.create(line_item_params)
      response = {status: "success", code: 2000, message: line_item}
      render json: response
    end

  end

  def destroy
    Budget.find(params[:budget_id]).line_items.find(params[:id]).destroy
    render 'layouts/application'
  end

  def update
    line_item = LineItem.find(params[:id])
    line_item.update_attributes(line_item_params)
    render json: line_item
  end

  private

  def line_item_params
    params.permit(:budget_id, :name, :amount, :paid, :user_id, :id)
  end

end
