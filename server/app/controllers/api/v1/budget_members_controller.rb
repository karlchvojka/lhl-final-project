class Api::V1::BudgetMembersController < ApplicationController
  def index
    render json: Budget.find(params[:budget_id]).budget_members.all
  end
end
