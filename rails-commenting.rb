# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) This is the class for the Blog_Post controller
class BlogPostsController < ApplicationController
  def index
    # 2)@posts is an instance variable representing information in the BlogPost model
    @posts = BlogPost.all
  end

  def show
    # 3)@post is an instance variable that represents a single item from the BlogPost model
    @post = BlogPost.find(params[:id])
  end

  # 4)This class creates the NEW method for our restful routes - creating an instance variable representing data to be added in the BlogPost Model
  def new
    @post = Post.new
  end

  def create
    # 5) CREATE in Restful Routes- creates a Post for the BlogPost model, if it successfuly creates it is added to the model, if not you are presented with a new blank Post form
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) UPDATE from restful routes- (put/patch) edits a Post from the BlogPost model, , if it successfuly creates it is updated, if not you are presented with the previous edit Post page
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7)If the current blog Post is not destroyed, you will be returned to the page before you attempted to delete it
      redirect_to blog_post_path(@post)
    end
  end

  # 8) Private is a built in Rails statement that protects the classes beneath it
  private
  def blog_post_params
    # 9) Strong params for the Blog Post model that require both columns in the database to contain content
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) This indicates a one-to-many relationship between Blog_Post and a model called Comment(s) which contains many values or "comments" in one Post instance
  has_many :comments
end
