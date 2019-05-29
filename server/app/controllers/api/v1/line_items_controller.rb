class Api::V1::LineItemsController < ApplicationController
  def index
    render json: Budget.find(params[:budget_id]).line_items.order(created_at: :desc)
 end

 def create
   line_item = LineItem.create(line_item_params)
   render json: line_item
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
