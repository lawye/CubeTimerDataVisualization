from pandas import read_csv
from matplotlib import pyplot as plt
import numpy as np

f=read_csv('.\\Data\\TT20190602.csv',engine='python')

def gpstime(gtime):
    year=1980
    month=12
    day=0
    hour=0
    m=0
    s=0
    