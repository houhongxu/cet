import { View, Text } from "@tarojs/components";
import Card from "./Card";

interface SelectPaperTypeButtonProps {
  onClick: () => void;
}

export default function SelectPaperTypeButton({
  onClick,
}: SelectPaperTypeButtonProps) {
  return (
    <Card bgColor="bg-pink-50">
      <View
        className="w-full flex items-center gap-2 active:opacity-80"
        onClick={onClick}
      >
        <Text className="text-lg">📝</Text>
        <Text className="font-bold text-gray-800">选择你的试卷类型</Text>
      </View>
    </Card>
  );
}
