module ApplicationHelper
  def current_user(uid)
    User.find_by id: uid
  end
end
