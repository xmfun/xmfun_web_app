module ApplicationHelper
  def logged_in?
    !uid.nil? && uid > 0
  end

  def uid
    session[:user_id]
  end

  def current_user
    User.find_by id: uid
  end

  def header_needed
    return true if controller.nil?

    !(['search'].include?(controller.action_name) && controller.controller_name == 'home')
  end
end
