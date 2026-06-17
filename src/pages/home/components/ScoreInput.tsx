import { View, Text, Input } from "@tarojs/components";
import { useState, useEffect } from "react";
import Card from "./Card";

interface ScoreInputProps {
  label: string;
  icon?: string;
  range: string;
  value: number | null;
  onChange: (value: number | null) => void;
  supportsHalf?: boolean;
  noCard?: boolean;
  isFirst?: boolean;
  disabled?: boolean;
}

export default function ScoreInput({
  label,
  icon,
  range,
  value,
  onChange,
  supportsHalf = false,
  noCard = false,
  isFirst = false,
  disabled = false,
}: ScoreInputProps) {
  const [inputValue, setInputValue] = useState(value === null ? "" : value.toString());

  useEffect(() => {
    setInputValue(value === null ? "" : value.toString());
  }, [value]);

  const handleInputChange = (e: any) => {
    const val = e.detail.value;
    setInputValue(val);
    if (val === "" || val === null) {
      onChange(null);
      return;
    }
    const numVal = parseFloat(val);
    if (!Number.isNaN(numVal)) {
      onChange(numVal);
    } else {
      onChange(null);
    }
  };

  const content = (
    <>
      <View className="flex items-center gap-2 mb-3">
        <Text className="text-lg">{icon}</Text>
        <Text className="text-gray-700 font-medium">
          {label} ({range}
          {supportsHalf ? ", 支持0.5" : ""})
        </Text>
      </View>
      <Input
        className={`rounded-xl py-3 px-4 text-center ${
          disabled
            ? "bg-gray-200 text-gray-500"
            : "bg-gray-100 text-gray-800"
        }`}
        type="number"
        value={inputValue}
        onInput={disabled ? undefined : handleInputChange}
        placeholder="请输入分数"
        disabled={disabled}
      />
    </>
  );

  if (noCard) {
    const marginClass = isFirst ? "" : supportsHalf ? "mt-4" : "mt-3";
    return <View className={marginClass}>{content}</View>;
  }

  return (
    <Card>
      {content}
    </Card>
  );
}
