import { View, Text } from "@tarojs/components";
import { ReactNode } from "react";

interface CardProps {
  title?: string;
  icon?: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export default function Card({
  title,
  icon,
  children,
  className = "",
  bgColor = "bg-white",
}: CardProps) {
  return (
    <View className={`${bgColor} rounded-2xl p-4 mx-4 my-3 shadow-sm ${className}`}>
      {title && (
        <View className="flex items-center gap-2 mb-3">
          {icon && <Text className="text-lg">{icon}</Text>}
          <Text className="font-bold text-gray-800">{title}</Text>
        </View>
      )}
      {children}
    </View>
  );
}

