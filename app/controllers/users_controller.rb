class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            wristband = encode_token({user_id: user.id})
            render json: {user: user, token: wristband}
        else
            render json: {error: "You done goofed"}
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
