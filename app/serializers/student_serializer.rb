class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :extra_time_needed, :extra_time_amount, :offer_support
  has_one :classroom
end
