class Api::V1::BudgetMembersController < ApplicationController
  def index
    @budgetmembers = Budget.find(params[:budget_id]).budget_members.all
    @users = []
    @budgetmembers.each do |budgetmember|
      @users.push User.find(budgetmember.user_id)
    end

    render json: @users
  end
end
