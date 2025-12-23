import { View, Text } from "@tarojs/components";
import Card from "./Card";

interface TestPaperSelectorProps {
  title: string;
  icon: string;
  subtitle: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  disabled?: boolean;
}

export default function TestPaperSelector({
  title,
  icon,
  subtitle,
  options,
  selectedOption,
  onSelect,
  disabled = false,
}: TestPaperSelectorProps) {
  return (
    <Card title={title} icon={icon}>
      <Text className="text-gray-500 text-sm mb-4">{subtitle}</Text>
      <View className="flex flex-col">
        {options.map((option, index) => {
          const isSelected = selectedOption === option;
          return (
            <View
              key={option}
              className={`flex items-center py-3 px-4 rounded-xl box-border ${
                index > 0 ? "mt-3" : ""
              } ${disabled ? "opacity-50" : "active:opacity-80"} ${
                isSelected
                  ? "bg-purple-50 border-2 border-purple-400"
                  : "bg-gray-50 border-2 border-transparent"
              }`}
              onClick={disabled ? undefined : () => onSelect(option)}
            >
              {isSelected ? (
                <View className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                  <Text className="text-white text-xs">✓</Text>
                </View>
              ) : (
                <View className="w-5 h-5 border-2 border-gray-400 rounded-full flex-shrink-0 mr-3"></View>
              )}
              <Text
                className={`flex-1 min-w-0 ${
                  isSelected ? "text-purple-700 font-medium" : "text-gray-700"
                }`}
              >
                {option}
              </Text>
            </View>
          );
        })}
      </View>
    </Card>
  );
}
