class ItemsController < ApplicationController
  def index
  end

  def new
    @item = Item.new
  end

  def create
    # binding.pry
    @item = Item.new(item_params)
    if @item.save
      redirect_to root_path
    else
      render :new
    end
  end
  private
  def item_params
    params.require(:item).permit(:product, :product_description, :price, :category_id, :condition_id, :bearer_id, :prefecure_id, :ship_date_id, :image ).merge(user_id: current_user.id)
  end

end
