import { Paper, Group, Text, Title, Button } from "@mantine/core";
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons-react";

const icons = {
  revenue: IconReceipt2,
  profit: IconCoin,
  coupons: IconDiscount2,
  customers: IconUserPlus,
};

const data = [
  { title: "Total Revenue", icon: "revenue", value: "50,000", diff: 15 },
  { title: "Total Profit", icon: "profit", value: "20,000", diff: -10 },
  { title: "Coupons Used", icon: "coupons", value: "500", diff: 20 },
  { title: "New Supporters", icon: "customers", value: "100", diff: 5 },
];

export default function StatsGrid() {
  return (
    <div className="m-28">
      <Title
        order={2}
        className="mb-4 mx-auto text-center dark:text-white text-3xl"
      >
        Our Charity Experience
      </Title>
      <Text className="mb-10 dark:text-white text-center">
        Here are some key statistics to highlight the impact of our charity
        work.
      </Text>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {data.map((stat) => {
          const Icon = icons[stat.icon];
          const DiffIcon =
            stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

          return (
            <Paper
              key={stat.title}
              withBorder
              radius="xl"
              className="border border-gray-300 dark:border-gray-700 bg-blue-100 dark:bg-white rounded-lg shadow-xl p-5"
            >
              <Group justify="space-between" className="mb-4">
                <Text
                  size="sm"
                  className="text-gray-600 dark:text-black font-semibold uppercase flex"
                >
                  {stat.title}
                  <Icon
                    className="text-gray-400 dark:text-gray-600 ml-3"
                    size={18}
                  />
                </Text>
              </Group>

              <Group align="flex-end" gap="xs" className="mb-3">
                <Text className="text-2xl font-semibold">{stat.value}</Text>
                <Text
                  className={`${
                    stat.diff > 0 ? "text-green-500" : "text-red-500"
                  } text-sm font-medium flex items-center space-x-1`}
                >
                  <span>{stat.diff}%</span>
                  <DiffIcon size={14} />{" "}
                  <Text size="xs" className="text-gray-500">
                    Compared to previous period
                  </Text>
                </Text>
              </Group>
            </Paper>
          );
        })}
      </div>
      <Group className="mt-12 mx-auto text-center">
        <Button
          radius="xl"
          size="md"
          className="flex-1 md:flex-none bg-white rounded-3xl py-3 px-5 mx-auto hover:bg-blue-500"
        >
          Donate Now
        </Button>
      </Group>
    </div>
  );
}
