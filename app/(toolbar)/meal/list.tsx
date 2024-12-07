"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import "./style.css";
import { Meal } from "@/types/meal";

type Props = {
  id: string;
};

export default function List(props: Props) {
  const { id } = props;

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState<Meal[]>([]);

  useEffect(() => {
    setLoading(true);
    if (date == undefined) {
      setDate(new Date());
    }

    fetch(`/api/meal/get?householdId=${id}&date=${date}`)
      .then((res) => res.json())
      .then((data) => setMeal(data as Meal[]))
      .then(() => setLoading(false));
  }, [date]);

  return (
    <div>
      <h1>Meal</h1>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full"
      />

      {loading && <Skeleton className="h-48 w-full" />}

      {!loading && meal.length === 0 && (
        <>
          <div className="text-center text-muted-foreground mt-10">
            No meals found for this date : {date?.toLocaleDateString()}
          </div>
          <div className="text-center p-2 ">
            <Link href="/meal/add">Add a meal</Link>
          </div>
        </>
      )}

      {!loading && meal.length > 0 && <MealCard {...meal[0]} />}
    </div>
  );
}

function MealCard(props: Meal) {
  const date: Date = new Date(props.date);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{props.meal_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <time dateTime={date.toISOString()}>
            {date.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
