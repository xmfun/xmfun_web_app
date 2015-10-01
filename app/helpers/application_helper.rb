module ApplicationHelper
  def current_user(uid)
    User.find_by id: uid
  end

  def header_needed
    return true if controller.nil?

    !(['search'].include?(controller.action_name) && controller.controller_name == 'home')
  end
end
