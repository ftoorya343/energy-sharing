import os
import csv


class Tariffs:
    def __init__(self, data_dir):
        self.data_dir = data_dir

        # TODO remove this
        self.tariffs = []

        # Tariff type specific arrays
        self.duos_tariffs = []
        self.nuos_tariffs = []
        self.tuos_tariffs = []
        self.retail_tariffs = []

    # TODO Get normal load working (from UI_Input)
    def load(self, inputs):
        # Reset the list of tariffs
        self.tariffs = []

        # Parse through each line in the UI inputs and create a tariff
        for each in inputs:
            row = each["row_inputs"]
            parameters = {}
            for each_dict in row:
                # print(each_dict, "\n")
                parameters[each_dict["name"]] = (each_dict["value"])
            # print(parameters, "\n")
            self.tariffs.append(Tariff(**parameters))

    def load_defaults(self):
        self.tariffs = []

        duos_path = os.path.join(self.data_dir, "defaults/duos.csv")
        nuos_path = os.path.join(self.data_dir, "defaults/nuos.csv")
        tuos_path = os.path.join(self.data_dir, "defaults/tuos.csv")
        retail_path = os.path.join(self.data_dir, "defaults/retail_tariffs.csv")

        mapping = [
            {'path': duos_path, 'array': self.duos_tariffs, 'tariff': DuosTariff},
            {'path': nuos_path, 'array': self.nuos_tariffs, 'tariff': NuosTariff},
            {'path': tuos_path, 'array': self.tuos_tariffs, 'tariff': TuosTariff},
            {'path': retail_path, 'array': self.retail_tariffs, 'tariff': RetailTariff},
        ]

        for each in mapping:
            self.load_tariff_from_csv(**each)

        for each in self.duos_tariffs:
            each.print()

    @staticmethod
    def load_tariff_from_csv(path, array, tariff):
        # Parse through each line in the defaults csv and create tariffs.
        with open(path) as file:
            reader = csv.DictReader(file)
            for row in reader:
                array.append(tariff(**row))

    def get_params_dict(self):
        # Create the params dict here. Similar to in central battery
        pass


class DuosTariff:
    def __init__(
                self,
                peak_charge,
                shoulder_charge,
                offpeak_charge,
                tariff_type=None,
                tariff_name=None,
                fit_input=None,
                Ref = None,
                dnsp = None,
                offer_name=None,
                type=None,
                daily_charge=None,
                flat_charge=None,
                block_1_charge=None,
                block_2_charge=None,
                controlled_load=None,
                peak_start_time=None,
                peak_end_time=None,
                peak_start_time_2=None,
                peak_end_time_2=None,
                shoulder_start_time=None,
                shoulder_end_time=None,
                shoulder_start_time_2=None,
                shoulder_end_time_2=None,
                block_1_volume=None,
                block_2_volume=None,
                demand=None,
                demand_units=None,
                tou_weekday_only_flag=None):

        self.tariff_type = tariff_type
        self.tariff_name = tariff_name
        self.fit_input = fit_input
        self.peak_charge = peak_charge
        self.shoulder_charge = shoulder_charge
        self.offpeak_charge = offpeak_charge

    # TODO Stop repeating this generic print!
    def print(self):
        print("Tariff Object Contains: {}, {}, {}".format(self.tariff_type, self.tariff_name, self.peak_charge))


class NuosTariff:
    def __init__(
                self,
                peak_charge,
                shoulder_charge,
                offpeak_charge,
                tariff_type=None,
                tariff_name=None,
                fit_input=None,
                Ref = None,
                dnsp = None,
                offer_name=None,
                type=None,
                daily_charge=None,
                flat_charge=None,
                block_1_charge=None,
                block_2_charge=None,
                controlled_load=None,
                peak_start_time=None,
                peak_end_time=None,
                peak_start_time_2=None,
                peak_end_time_2=None,
                shoulder_start_time=None,
                shoulder_end_time=None,
                shoulder_start_time_2=None,
                shoulder_end_time_2=None,
                block_1_volume=None,
                block_2_volume=None,
                demand=None,
                demand_units=None,
                tou_weekday_only_flag=None,
                local_solar_import=None,
                central_battery_import=None,
                central_battery_local_solar_import=None):

        self.tariff_type = tariff_type
        self.tariff_name = tariff_name
        self.fit_input = fit_input
        self.peak_charge = peak_charge
        self.shoulder_charge = shoulder_charge
        self.offpeak_charge = offpeak_charge

    def print(self):
        print("Tariff Object Contains: {}, {}, {}".format(self.tariff_type, self.tariff_name, self.peak_charge))


class TuosTariff:
    def __init__(
                self,
                peak_charge,
                shoulder_charge,
                offpeak_charge,
                tariff_type=None,
                tariff_name=None,
                fit_input=None,
                Ref = None,
                dnsp = None,
                offer_name=None,
                type=None,
                daily_charge=None,
                flat_charge=None,
                block_1_charge=None,
                block_2_charge=None,
                controlled_load=None,
                peak_start_time=None,
                peak_end_time=None,
                peak_start_time_2=None,
                peak_end_time_2=None,
                shoulder_start_time=None,
                shoulder_end_time=None,
                shoulder_start_time_2=None,
                shoulder_end_time_2=None,
                block_1_volume=None,
                block_2_volume=None,
                demand=None,
                demand_units=None,
                tou_weekday_only_flag=None):

        self.tariff_type = tariff_type
        self.tariff_name = tariff_name
        self.fit_input = fit_input
        self.peak_charge = peak_charge
        self.shoulder_charge = shoulder_charge
        self.offpeak_charge = offpeak_charge

    def print(self):
        print("Tariff Object Contains: {}, {}, {}".format(self.tariff_type, self.tariff_name, self.peak_charge))


class RetailTariff:
    def __init__(self,
                 peak_charge,
                 shoulder_charge,
                 offpeak_charge,
                 tariff_type=None,
                 tariff_name=None,
                 ref=None,
                 retailer=None,
                 offer_name=None,
                 type=None,
                 daily_charge=None,
                 flat_charge=None,
                 block_1_charge=None,
                 block_2_charge=None,
                 controlled_load=None,
                 peak_start_time=None,
                 peak_end_time=None,
                 peak_start_time_2=None,
                 peak_end_time_2=None,
                 shoulder_start_time=None,
                 shoulder_end_time=None,
                 shoulder_start_time_2=None,
                 shoulder_end_time_2=None,
                 block_1_volume=None,
                 block_2_volume=None,
                 demand=None,
                 demand_units=None,
                 solar_tariff_1=None,
                 solar_cap_1=None,
                 solar_tariff_2=None,
                 tou_weekday_only_flag=None):

        self.peak_charge = peak_charge
        self.shoulder_charge = shoulder_charge
        self.offpeak_charge = offpeak_charge
        self.tariff_type = tariff_type
        self.tariff_name = tariff_name
