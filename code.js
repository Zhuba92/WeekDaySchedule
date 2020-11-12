$(document).ready(
    function ()
    {
        $("input[name=day]").change(outputSchedule);

        function outputSchedule()
        {
            var day = $("input[name=day]:checked").val();

            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday")
            {
                switch (day)
                {
                    case "Monday":
                        $("#output").text('Work all day');
                        break;
                    case "Tuesday":
                    case "Wednesday":
                        $("#output").text(`Work from 9-5, and then go to sleep`);
                        break;
                    case "Thursday":
                        $("#output").text(`Eat Breakfast at 9, go for a run, take a nap at 3, you don't have work, do what you'd like`);
                        break;
                    case "Friday":
                        $("#output").text(`Eat Breakfast at , go to work until 5, take a nap at 5:30, eat dinner`);
                        break;
                    case "Saturday":
                        $("#output").text(`Wake up at 8, go to the farmers market, watch some Netflix, go to bed`);
                        break;
                    case "Sunday":
                        $("#output").text(`Get up at 10, eat some breakfast, watch the Packer game, eat dinner`);
                        break;
                }
            }


        }
    }
);