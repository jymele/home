"use client";
import * as React from "react";
import { motion, useTime, useTransform } from "motion/react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, RefreshCcw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Page() {
  const [date, setDate] = React.useState<Date>();
  const [mealName, setMealName] = React.useState<string>();
  const [notes, setNotes] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);

  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 360], { clamp: false });

  React.useEffect(() => {
    setDate(new Date());
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    console.log({ date, mealName, notes });

    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    setLoading(false);
  }

  return (
    <div className="p-2 w-full">
      <h1 className="mb-6 font-semibold text-xl mt-8">Add a Meal</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Input
            type="text"
            placeholder="Meal name"
            value={mealName}
            required
            onChange={(e) => setMealName(e.target.value)}
          />
        </div>

        <div>
          <Textarea
            placeholder="Any notes to consider for this meal?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <Button type="submit" disabled={loading}>
          {!loading && <span>Add meal</span>}
          {loading && (
            <>
              <motion.div style={{ rotate }}>
                <RefreshCcw />
              </motion.div>
              Adding meal...
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
