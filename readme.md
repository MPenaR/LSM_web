This is a repository for the animations of the LSM

The LSM solutions seem to be very independent to the value of R of the measuring antennas, at least as long as the antennas are not inside the target. This can be seen [here](./Phantom/R_sweep/test_slider.html).

On the other hand, when taking into account the regularization parameter $\alpha$, different frequecies are more sensitive at different values. Take a look at these results for the different targets:

 - [two Nylon cylinders](./Nylon-Cyls/alpha_sweep/test_slider.html)

 - [4 in Nylon cylinder](./Nylon-4.0/alpha_sweep/test_slider.html)

 - [Phantom dielectric target](./Phantom/alpha_sweep/test_slider.html)

 - [2 in steel cylinder](./Metal-2.0/alpha_sweep/test_slider.html) 

Finally, if we use Morozov regularization, it seems that the results tend to a limit when decreasing the noise level $\delta$. This can be seen in [here](./Delta_sweep/Two-Cyls2/test_slider.html)


I've added a [sweep in the gamma](./gamma_sweep/4inCyl/test_slider.html) for the modified far field pattern.

## NEW: results for the 4 inch cylinder in an extended range of regularizations
- [ results for a sweep in alpha without Morozov criterion](Delta_sweep/4inCyl_no_Morozov/test_slider.html)
- [ results for a sweep in delta with Morozov criterion](Delta_sweep/4inCyl_Morozov/test_slider.html)


## GIFS:
### Delta sweeps
#### Two dielectric
parallel indicator.

![file not found](./GIFs/delta_two_parallel_rotating_transparent.gif)

serial indicator (20fps 70%Q 7.4M).

![file not found](./GIFs/delta_two_serial_rotating_transparent.gif)

product indicator ( smooth shading).

![file not found](./GIFs/delta_two_prod_rotating_transparent.gif)


#### U shaped

parallel indicator.

![file not found](./GIFs/delta_U_parallel_rotating_transparent.gif)


serial indicator. (30 M)

![file not found](./GIFs/delta_U_serial_rotating_transparent.gif)


product indicator. ( 7.5M 10 fps)

![file not found](./GIFs/delta_U_prod_rotating_transparent.gif)
