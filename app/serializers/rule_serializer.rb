class RuleSerializer < ActiveModel::Serializer
  attributes :id, :rule, :explanation, :related_facts, :grid_photo, :additional_explanation, :rule_number, :rule_title
end
